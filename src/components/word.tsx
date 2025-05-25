function Word({ array }: { array: string[] }) {
    if (!array || array.length === 0) {
        return 'x'
    }

    const word = array[Math.floor(Math.random() * array.length)]

    return (
        <span className="text-xl font-bold text-foreground px-3 py-1 bg-muted rounded-md bg-gray-200">
            {word}
        </span>
    )
}

export default Word
