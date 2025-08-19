

function WelcomeMessage({todoItems}) {
    return todoItems.length === 0 && <p>Enjoy your day</p>
}

export default WelcomeMessage