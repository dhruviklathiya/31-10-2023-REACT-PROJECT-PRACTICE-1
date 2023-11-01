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



// Rendering from App2 with UI component
const Card = ({title,author}) => {
  return(
      <>
      <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{author}</h6>
          <a href="https://bento.me/dhruvik" class="card-link">Click here</a>
        </div>
      </div>
      </>
  )
}

export default Card