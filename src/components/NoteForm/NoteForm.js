import './noteForm.css';

export default function NoteForm(){
    return(
        
        <div className="container">
            <form className='note-form'>
            
  <textarea className="input form-control" placeholder="Add a note..." id="floatingTextarea"></textarea>
  

                <button type="button" class="btn btn-success"><i class="fa-solid fa-plus"></i></button>
            </form>
        </div>
    );
};