//forcefully hide conditional question if the parent question has a value greater then 0

const hidden_class_name = 'hideQuestion';
const shown_class_name = 'showQuestion';


hideConditionalQuestions();


function hideConditionalQuestions(){
    let conditional_questions = document.querySelectorAll('div[conditional_question_id]');

    conditional_questions.forEach(question => {

        if(shouldBeHidden(question)){
            question.classList.replace(shown_class_name, hidden_class_name);
        }

    });

}

function shouldBeHidden(question){
    const hidden_class_name = 'hideQuestion';
    let conditional_question_id = question.getAttribute('conditional_question_id');
    let parent_question_id = conditional_question_id;
    let conditional_question_already_hidden = question.className.includes(hidden_class_name);
    let parent_question_is_number_input =  question.getAttribute('conditional_question_values') == 0;


    //no need to forcefully hide questions that are already hidden
    if(conditional_question_already_hidden){
        return false;
    }

     // if it doesn't specify a parent, don't forcefully hide it
    if(!conditional_question_id){
        return false;
    }

    // we are only considering forcefully hiding conditional questions that are associated with number inputs
    if(!parent_question_is_number_input){
        return false;
    }
    
    let parent_question_wrapper = document.querySelector(`div[ ques_id="${parent_question_id}"]`);
    let parent_question_response_wrapper = parent_question_wrapper.querySelector('.parfResponse');
    let parent_question_response = parent_question_response_wrapper.textContent;

    // We don't want to forefully hide the condi question if the parent question doesn't have a response or if the response is empy or has a values of 0
    if(!parent_question_response || parent_question_response =='' || parent_question_response ==0){
        return false;
    }

    //we should forcefully hide the conditional question if the parent question has a value greater then 0
    if(parent_question_response > 0){
        return true;
    }
    
}











