// import {
//     CHANGE_VALUE,
//     CHANGE_VALUE2
// } from '../actions/rangeSliderAction';

export default function(sliderPosition){
    return function update(state=0,action){
        switch(action.type){
            case `CHANGE_VALUE${sliderPosition}`:
                if(action.value == 0 )
                {
                    return 0;
                }
                else if(action.value >0 && action.value <= 30)
                {
                    return 319;
                }
                else if(action.value <= 50)
                {
                    return 525;
                }
                else if(action.value <= 70)
                {
                    return 726;
                }
                else{
                    return 1022;
                }
            default:
                return state;
        }
    }
}
