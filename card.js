class Pokecard extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const number = document.createElement("span");
        number.textContent = this.getElementsByClassName("number");

        const name = document.createAttribute("span");
        name.textContent = this.getElementsByClassName("name");

        componentRoot.appendChild(number);
        componentRoot.appendChild(name);


        return componentRoot;
    }

    style(){}
}

customElements.define("poke-card", Pokecard);