export function Search() {
    return (
        <div>
            <label className="group flex items-center gap-x-2 border-[2px] border-[#eef0f0c2] rounded-md h-[2.2rem] m-1 w-[3rem] hover:w-[20rem] hover:border-[#155dfb]  tansition-all duration-700 ease-in-out px-2">
                <svg className=" text-[#727377]" width="25" height="25" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd"d="M9 3.5a5.5 5.5 0 0 1 4.223 9.002l3.638 3.637a.75.75 0 1 1-1.06 1.061l-3.637-3.638A5.5 5.5 0 1 1 9 3.5Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" /></svg>
                <input className="hidden group-hover:block w-full h-full transition-all duration-300" type="text" placeholder="Rechercher..." />
            </label>
        </div>
    )
}