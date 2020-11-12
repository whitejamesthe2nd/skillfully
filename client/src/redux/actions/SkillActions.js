
export const LOAD_SKILLS = "LOAD_SKILLS";
export const REMOVE_SKILL = "REMOVE_SKILL";
export const CREATE_SKILL = "CREATE_SKILL";

//!ACTIONS
export const loadSkills = (skills) => {
    return {
        type: LOAD_SKILLS,
        skills
    }
}

// export const removeSkill = () => {
//     return {
//         type: REMOVE_SKILL
//     }
// }

// export const createSkill = (skill) => {
//     return {
//         type: CREATE_SKILL,
//         skill
//     }
// }

//! THUNKS
//fetch skills
export const loadSkillsThunk = () => {

    return async dispatch => {
        const res = await fetch(`/api/skills`);

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(loadSkills(data))
        }
        return res;
    };
};
//logout
// export const logout = () => async dispatch => {
//     const res = await fetch('/api/session/token/remove', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     if (res.ok) {
//         dispatch(removeSKILL());
//     }
//     return res
// }
