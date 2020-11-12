import {LOAD_SKILLS} from '../actions/SkillActions'

export const skills = (state = {}, action) => {
    switch (action.type) {
        case LOAD_SKILLS:
            return action.skills;
        // case CREATE_SKILL:
        //     return action.skill;
        // case REMOVE_SKILL:
        //     return {}
        default:
            return state
    }
}
