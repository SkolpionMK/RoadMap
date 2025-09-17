class Node {
    constructor(name, description, duration) {
        this.id == null //null while the Database isn't ready yet
        this.name = name
        this.description = description
        this.duration = duration
        this.links = []
    }

    create_link(node_id) {
        try {
            this.links.push(node_id)
            return "Link Created Succefully!"
        } catch(err) {
            return `Something Went Wrong: ${err}`
        }
    }
}