// import { createContext, useContext, useState } from 'react';

// const ModalContext = createContext(false);

// export function Sidebar() {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <ModalContext.Provider value={{ isActive }}>
     
//     </ModalContext.Provider>
//   );
// }

// function SidebarNav() {
//   let { isOpen } = useContext(SidebarContext);

//   return (
//     <div>
//       <p>Home</p>

//       {isOpen && <Subnav />}
//     </div>
//   );
// }