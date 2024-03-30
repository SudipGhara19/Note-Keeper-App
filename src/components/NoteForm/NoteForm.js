import { useState } from 'react';
import './noteForm.css';
import { useDispatch } from 'react-redux';
import { noteAction } from '../../redux/noteReducer';

export default function NoteForm(){
    const [noteText, setNoteText] = useState('');

    const dispatch = useDispatch();

    // after clicking add button this function will trigger
    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(noteAction.add(noteText));
        setNoteText('');
    };


    return(
        
        <div className="container">
            <form className='note-form' onSubmit={onHandleSubmit}>
            
  <textarea className="input form-control" placeholder="Add a note..." id="floatingTextarea" value={noteText} onChange={(e)=>setNoteText(e.target.value)}></textarea>
  

                <button type="submit" class="btn btn-success"><i class="fa-solid fa-plus"></i></button>
            </form>
        </div>
    );
};