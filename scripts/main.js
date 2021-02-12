import { CriminalList } from './criminals/CriminalList.js'
import './facilities/FacilityList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js';
import { ShowNoteButton } from './notes/ShowNoteButton.js';
import { NoteList } from './notes/NoteList.js';
import { AlibisList } from './criminals/alibis/AlibisList.js'
import { WitnessList } from './witnesses/WitnessList.js';
import { CardSelect } from './cards/CardSelect.js';

ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNoteButton();
CardSelect();

