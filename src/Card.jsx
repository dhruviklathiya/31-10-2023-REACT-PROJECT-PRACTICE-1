// const Card = ({val_}) => {
//     return(
//         <>
//         <div class="card" style={{width: "18rem"}}>
//           <div class="card-body">
//             <h5 class="card-title">{val_.title}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">{val_.author}</h6>
//             <a href="https://bento.me/dhruvik" class="card-link">Click here</a>
//           </div>
//         </div>
//         </>
//     )
// }

import { Link } from "react-router-dom"



// Rendering from App2 with UI component
// const Card = ({title,author,ind_}) => {
//   return(
//       <>
//       <div class="card" style={{width: "18rem"}}>
//         <div class="card-body">
//           <h5 class="card-title">{title}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">{author}</h6>
//           <a href="https://bento.me/dhruvik" class="card-link">Click here</a>
//           <button type="button">Index: {ind_}</button>
//         </div>
//       </div>
//       </>
//   )
// }

// For App6
const Card = ({title,author,ind_}) => {
  return(
      <>
      <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{author}</h6>
          <Link to={`/${title}`}>Click to view</Link>
          <p>{ind_}</p>
        </div>
      </div>
      </>
  )
}
export default Card