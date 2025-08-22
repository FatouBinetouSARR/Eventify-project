export function Nav({linkToParcour="#parcour",linkToCreatEvent="#createEvent"}) {
    return(
        <nav>
            <ul className="flex justify-around list-none p-4 text-xl flex-wrap">
                <li><a className="px-2 mx-[0.5rem]" href={linkToParcour}>Parcours</a></li>
                <li><a className="px-2 mx-[0.5rem]" href={linkToCreatEvent}>Crée un évenement</a></li>
            </ul>
        </nav>
    )
}