// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.
import Banner from './banner'
import NavBar from './navbar'
import GenericHolder from "./genericHolder";

const allModules = [
  { name: "CalvinGenericHolder", module: GenericHolder },//for legacy - remove later
  { name: "GenericHolder", module: GenericHolder },
  { name: "CalvinHeader", module: Banner },//for legacy - remove later
  { name: "Header", module: Banner },
  { name: "NavBar", module: NavBar }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};
