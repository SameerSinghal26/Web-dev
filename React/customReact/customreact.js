function customRender(reactElement , container){
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('href',reactElement.props.target);

    container.appendChild(domElement);*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const i in reactElement.props) {
        if(i === 'children'){
            continue;
        }
        domElement.setAttribute(i,reactElement.props[i]);

    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click on this to go on the google page.'
}

const root1  = document.getElementById("root");

customRender(reactElement,root1);