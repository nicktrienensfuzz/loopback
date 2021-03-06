function App() {
    const {Container, Row, Col} = ReactBootstrap;
    return (
        <Container>
            <Row>
                <Col md={{offset: 2, span: 8}}>
                    <TodoListCard/>
                </Col>
            </Row>
        </Container>
    );
}

function TodoListCard() {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        fetch('/todos')
            .then(r => r.json())
            .then(setItems);
    }, []);

    const onNewItem = React.useCallback(
        newItem => {
            setItems([...items, newItem]);
        },
        [items],
    );

    const onItemUpdate = React.useCallback(
        item => {
            const index = items.findIndex(i => i.id === item.id);
            setItems([
                ...items.slice(0, index),
                item,
                ...items.slice(index + 1),
            ]);
        },
        [items],
    );

    const onItemRemoval = React.useCallback(
        item => {
            const index = items.findIndex(i => i.id === item.id);
            setItems([...items.slice(0, index), ...items.slice(index + 1)]);
        },
        [items],
    );

    if (items === null) return 'Loading...';

    return (
        <React.Fragment>
            <AddItemForm onNewItem={onNewItem}/>
            {items.length === 0 && (
                <p className="text-center">No items yet! Add one above!</p>
            )}
            {items.map(item => (
                <ItemDisplay
                    item={item}
                    key={item.id}
                    onItemUpdate={onItemUpdate}
                    onItemRemoval={onItemRemoval}
                />
            ))}
        </React.Fragment>
    );
}

function AddItemForm({onNewItem}) {
    const {Form, InputGroup, Button} = ReactBootstrap;

    const [newItem, setNewItem] = React.useState('');
    const [newDescription, setNewDescription] = React.useState('');

    const [submitting, setSubmitting] = React.useState(false);

    const submitNewItem = e => {
        e.preventDefault();
        setSubmitting(true);
        fetch('/todos', {
            method: 'POST',
            body: JSON.stringify({title: newItem, desc: newDescription, isComplete: false}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(r => r.json())
            .then(item => {
                onNewItem(item);
                setSubmitting(false);
                setNewItem('');
                setNewDescription('');
            });
    };

    return (
        <Form onSubmit={submitNewItem}>
            <InputGroup className="mb-3">
                <Form.Control
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    placeholder="New Item"
                    aria-describedby="basic-addon1"
                />
                <InputGroup.Append>
                    <Button
                        type="submit"
                        variant="success"
                        disabled={!newItem.length}
                        className={submitting ? 'disabled' : ''}
                    >
                        {submitting ? 'Adding...' : 'Add Item'}
                    </Button>
                </InputGroup.Append>
                <InputGroup className="mb-5">
                    <Form.Control
                        value={newDescription}
                        onChange={e => setNewDescription(e.target.value)}
                        type="text"
                        placeholder="description"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </InputGroup>
        </Form>
    );
}

function ItemDisplay({item, onItemUpdate, onItemRemoval}) {
    const {Container, Row, Col, Button} = ReactBootstrap;

    const toggleCompletion = () => {
        fetch(`/todos/${item.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: item.title,
                isComplete: !item.isComplete,
            }),
            headers: {'Content-Type': 'application/json'},
        })
            .then(fetch(`/todos/${item.id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }))
            .then(r => r.json())
            .then(onItemUpdate);
    };

    const removeItem = () => {
        fetch(`/todos/${item.id}`, {method: 'DELETE'}).then(() =>
            onItemRemoval(item),
        );
    };

    return (
        <Container fluid className={`item ${item.isCompleted && 'completed'}`}>
            <Row>
                <Col xs={1} className="text-center">
                    <Button
                        className="toggles"
                        size="sm"
                        variant="link"
                        onClick={toggleCompletion}
                        aria-label={
                            item.completed
                                ? 'Mark item as incomplete'
                                : 'Mark item as complete'
                        }
                    >
                        <i
                            onClick={toggleCompletion}
                            className={`far ${
                                item.isCompleted ? 'fa-check-square' : 'fa-square'
                            }`}
                        />
                    </Button>
                </Col>
                <Col xs={10} className="name">

                <Container fluid> <Row>
                <Col xs={10} className="name">
                    {item.title}
                </Col></Row>
                <Row>
                <Col xs={10} className="name">
                    {item.desc}
                </Col>
                </Row>
                </Container>
                </Col>
                <Col xs={1} className="text-center remove">
                    <Button
                        size="sm"
                        variant="link"
                        onClick={removeItem}
                        aria-label="Remove Item"
                    >
                        <i className="fa fa-trash text-danger"/>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
