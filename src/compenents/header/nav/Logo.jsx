export function Logo () {
    const svg ={
  fill:'#155dfb',
  stroke: '#155dfb'
}
    return(
        <div className='flex items-center gap-x-[.2rem] text-3xl font-bold  m-4'>
            <svg style={svg} viewBox="0 0 24 24" width="25" height="25"><g id="_01_align_center" data-name="01 align center"><path d="M21,2H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM2,5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V8H2ZM2,22V10H22V22Z"/><rect x="15" y="13" width="2" height="2"/><rect x="11" y="13" width="2" height="2"/><rect x="7" y="13" width="2" height="2"/><rect x="15" y="17" width="2" height="2"/><rect x="11" y="17" width="2" height="2"/><rect x="7" y="17" width="2" height="2"/></g></svg>
             <p className="text-black-600">Eventify</p>
        </div>
    )
}