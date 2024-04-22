 export const crearDiv =(texto )=>{
    const menuPrincipal = document.createElement('div');
    menuPrincipal.classList.add("principal");
    let p = document.createElement('p');
    p.innerHTML =texto;
    menuPrincipal.appendChild(p);
    return menuPrincipal;
};

