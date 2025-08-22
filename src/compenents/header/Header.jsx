import { Search } from './nav/Search';
import { Nav } from './nav/Nav';
import { Connexion } from './nav/Connexion';
import { Logo } from './nav/Logo';
export function Header() {
    return(
        <div className='flex justify-around items-center  h-[4rem]'>
            <Logo/>
            <Search />
            <Nav/>
            <Connexion/>
        </div>
    )
}