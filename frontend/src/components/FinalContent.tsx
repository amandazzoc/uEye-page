import Soluctions from "./Soluctions";
import "../styles/final-content.css"; 
import SendEmail from "./SendEmail";

export default function FinalContent() {
    return (
        <div className="final-content">
            <Soluctions />
            <SendEmail />
        </div>
    )
}