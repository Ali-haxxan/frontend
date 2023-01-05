import React,{useState,useEffect} from 'react'

const Modal = (props) => {
    const [err, setErr] = useState(null);
    const [success, setSuccess] = useState(null);
    let [id, setId] = useState();
    console.log(props)
    let [name, setName] = useState();
    const [duration, setDuration] = useState(); 
    const [date, setDate] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    useEffect(()=>{
        setId(props.data?._id);
        setName(props.data?.name);
        setDuration(props.data?.duration);
        setDate(props.data?.date);
        setType(props.data?.activity_type);
        setDescription(props.data?.description);
    },[props?.data]);

    const updateActivity = async (event) => {

        event.preventDefault();
        setErr(null);
         console.log({
            "id": id,
            "name": name,
            "description": description,
            "activity_type": type,
            "date": date,
            "duration": duration,
          })
        // console.log(props);
          const submit_data = await fetch(
            "http://127.0.0.1:5000/user/activity-edit",
            {
              method: "POST",
              body: JSON.stringify({
                "id": id,
                "name": name,
                "description": description,
                "activity_type": type,
                "date": date,
                "duration": duration,
              }),
              headers: { "Content-Type": "application/json" },
            }
          );
          var result = await submit_data.json();
          if (submit_data.status === 200) {
            setSuccess(true);
            props.setData(result);  
          }
         else {
            setErr(result.messasge);
        }
      }; 

     
  return (
    <div>
         <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white d-flex justify-content-between">
              <h5 className="modal-title" id="exampleModalLongTitle text-center">
                Update {props.data?.name}
              </h5>
              {success && ( <span className="text-success">Activity updated Successfully!</span> )}
              {err&&<span>{err}</span>}
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form id="makeTodo" onSubmit={updateActivity}>
                <div class="form-group d-flex flex-row align-items-end"> 
                  
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    class="form-control  signup"
                    placeholder="Name..."
                    value={name}
                  />
                </div>
                {err && !name && (
                  <span className="text-danger">"Name is not valid"</span>
                )}
                 <div class="form-group d-flex flex-row align-items-end select">
                 
                  <select onChange={(e) =>setType(e.target.value)} 
                    className="form-select  signup text-muted border" selected = {type}
                  >
                    <option value="63b46c281857c50eb325eb55" selected={props.data?.activity_type === "63b46c281857c50eb325eb55"} >Run</option>
                    <option value="63b46c281857c50eb325eb54" selected={props.data?.activity_type === "63b46c281857c50eb325eb54"} >Walk</option>
                    <option value="63b46c281857c50eb325eb56" selected={props.data?.activity_type === "63b46c281857c50eb325eb56"} >Bicycle Ride</option>
                    <option value="63b46c281857c50eb325eb57" selected={props.data?.activity_type === "63b46c281857c50eb325eb57"} >Hike</option>
                    <option value="63b46c281857c50eb325eb58" selected={props.data?.activity_type === "63b46c281857c50eb325eb58"} >Swim</option>
                  </select>
                </div>
                <div class="form-group d-flex flex-row align-items-end">
               
                  <input
                    type="text"
                    onChange={(e) => setDuration(e.target.value)}
                    class="form-control  signup"
                    placeholder="Duration in Minutes..."
                    value={duration}
                  />
                </div>
                {err && !duration && (
                  <span className="text-danger">"duration is required"</span>
                )}
                 
                <div class="form-group d-flex flex-row align-items-end">
                
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    class="form-control  signup"
                    placeholder="Date..."
                    value={date}
                  />
                </div>
                {err && !date && (
                  <span className="text-danger">"date is required"</span>
                )}

                <div class="form-group d-flex flex-row align-items-end">
                  <textarea
                    value={description}
                    rows="4"
                    cols="50"
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control textarea"
                    placeholder="Enter Details..."
                  ></textarea>
                </div>
                {err && !description && (
                  <span className="text-danger">"details is required"</span>
                )}
                <div class="form-button d-flex justify-content-center mt-4 ">
                  <button type="submit" class="btn btn-info auth-button" 
                  >
                   Update
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal