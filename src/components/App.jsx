import Carwidget from "./CarWidget/CarWidget";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Navbar from "./Navbar/Navbar";
/*
class => className
<input> => <input/>
´´${}´ => {}
style "nombrePropiedad" => style = {{"nombrePropiedad"}}
*/
function App() {
  return (
    <div>
      <Navbar/>
      <Carwidget cantidadCarrito={10}/>
      <ItemListContainer valorFrase={'Crespiburger, las mejores hamburguesas'}/>
    </div>

  );
}

export default App;
