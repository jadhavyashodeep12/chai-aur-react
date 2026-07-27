
const mainContainer=document.querySelector("#root")

const reactElement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    childern:'Click me to visit google'
}
function customRender(reactElement,Container){
    /* method 1:
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    Container.appendChild(domElement)
    */
//    method 2:
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    for( const prop in reactElement.props ){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    Container.appendChild(domElement)
}


customRender(reactElement,mainContainer)