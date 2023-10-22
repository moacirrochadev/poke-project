class Cardindividual extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: open});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "pokeCard");
        

        return componentRoot;
    }

    style(){}
}

customElements.define("poke-cards", Cardindividual);