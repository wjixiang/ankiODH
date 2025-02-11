import SubtitleWord from "./SubtitleWord";
import React from "react";
import { subtitleData } from '../../subtitle';
import { createRoot } from "react-dom/client";
import WordPopup from "../WordPopup";


interface SubtitleSentenceProps {
    sententce: subtitleData;
}

const SubtitleSentence: React.FC<SubtitleSentenceProps> = (props) => {
    const splitedWords = props.sententce.sentence.split(" ")

    const createPopup = (word: string | null) => {  
            // 移除之前的弹窗  
            const existingPopup = document.getElementById('shift-popup');  
            if (existingPopup) {  
                existingPopup.remove();  
            }  
        
            // 创建新的弹窗元素  
            const popupElement = document.createElement('div');  
            popupElement.id = 'shift-popup';  
            popupElement.setAttribute('data-type', 'chrome-extension-popup');  
        
            // 设置位置  
            popupElement.style.position = 'fixed';  
            popupElement.style.left = '100px'; // 静态位置，或根据需要动态设置  
            popupElement.style.top = '100px'; // 静态位置，或根据需要动态设置  
            popupElement.style.zIndex = '99999'; // 确保在其他元素之上  
        
            // 将元素添加到文档  
            document.body.appendChild(popupElement);  
            console.log(popupElement);  
        
            // 创建 React 根  
            const root = createRoot(popupElement);  
        
            // 渲染 React 组件  
            root.render(  
                <React.StrictMode>  
                    <WordPopup   
                        word={word || ''}
                        sentence={props.sententce.sentence} 
                        onClose={()=>{}} />  
                </React.StrictMode>  
            );  
        }

    return <div>
        {splitedWords.map(word => <SubtitleWord word={word} onSelect={createPopup}/>)}
    </div>
}

export default SubtitleSentence