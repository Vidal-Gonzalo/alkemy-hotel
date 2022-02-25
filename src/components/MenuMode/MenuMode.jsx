import React, { useContext } from "react";
import { Menu } from "../../context/MenuContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./MenuMode.css";

export default function MenuMode() {
  const { menu, vegan, removeItem, clearMenu } = useContext(Menu);

  return (
    <>
      {menu.length > 0 ? (
        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Puntaje de salud</TableCell>
                <TableCell>Tiempo de preparación</TableCell>
                <TableCell>Vegano</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={item.img} alt={item.title} width="80" />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.healthScore}</TableCell>
                  <TableCell>{item.readyInMinutes}</TableCell>
                  <TableCell>{item.vegan ? "Sí" : "No"}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      onClick={() => removeItem(item)}
                      variant="contained"
                      color="error"
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="no-menu">
          <h5>No hay ítems en tu menú :(</h5>
        </div>
      )}
    </>
  );
}

// <div className="container">
//   <div className="wrap-table">
//     {menu.length <= 0 ? (
//       <div className="no-items">
//         <h3>No hay ningún elemento en tu menú :( </h3>
//       </div>
//     ) : (
//       <table>
//         <thead>
//           <tr>
//             <th>Imagen</th>
//             <th>Nombre</th>
//             <th>Precio</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menu.map((element) => {
//             return (
//               <tr key={element.id}>
//                 <td>
//                   <img
//                     src={element.img}
//                     alt="Imagen de producto"
//                     width="80"
//                   />
//                 </td>
//                 <td>{element.title}</td>
//                 <td>{element.price}</td>
//                 <td>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => removeItem(element.id)}
//                   >
//                     Eliminar
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//         <tfoot>
//           <tr align="center">
//             <td className="right" colSpan={1}>
//               <button onClick={clearMenu} className="btn btn-danger">
//                 Limpiar carrito
//               </button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     )}
//   </div>
// </div>
