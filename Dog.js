
function Dog(data) {
    Object.assign(this, data)

    this.doghtml = function() {
        const { name, avatar, age, bio } = this;
        return`
        <div class="profile">
            <img class="cover-img" src="${avatar}">
            <h1 class="name">${name}, ${age}</h1>
            <p class="bio">${bio}</p>
        </div>
    `
    }
} 

export default Dog