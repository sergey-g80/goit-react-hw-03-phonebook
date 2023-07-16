
import content from '../data/cardContent.json';
import { CardNewContent } from './CardNewContent';

const {titleNew} = content
export const CardNew = () => {
    return (
        <div>
            <CardNewContent 
            titleNew={titleNew}
            />
            
        </div>
    )
}