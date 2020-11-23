
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
        const res = await fetch(`/api/skills/`);

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(loadSkills(data))
        }
        return res;
    };
};
export const createSkillThunk = (skill) => {

    return async dispatch => {
        const res = await fetch(`/api/skills/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify(skill),
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(loadSkillsThunk())
        }
        return res;
    };
};
export const deleteSkillThunk = (id) => {

    return async dispatch => {
        const res = await fetch(`/api/skills/delete`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({id}),
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            dispatch(loadSkillsThunk())
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
