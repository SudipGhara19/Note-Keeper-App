import './noteList.css';
import { useDispatch, useSelector } from 'react-redux';
import { noteAction } from '../../redux/noteReducer';

export default function NoteList(){
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.noteReducer.notes);
    
    return(
        <div className="list-container">
            <ul>
                {notes.map((note, index) => (
                    <li key={index}> 
                        <div>{note.text}</div>
                        <div>
                            <button className='btn-edit'>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button className='btn-delete' onClick={()=>dispatch(noteAction.delete(index))}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};