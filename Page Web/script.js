//l'outil getElementById permet de réaliser une fonction d'affichage dynamaique à base de liste lorsqu'un clic est réalisé sur le bouton next ou prev

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item'); //On compose une liste à base de toutes les images qui sont dans notre classe item à chaque clique !! Important
    document.getElementById('slide').appendChild(lists[0]); //Prend le premier élément de la liste 'lists' (élément en cours de défilement)
                                                            //et l'ajoute à la fin de la liste.
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}