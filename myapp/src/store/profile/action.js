export const TOGGLE_SHOW_NAME = "TOGGLE_SHOW_NAME";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME,
};

export const changeName = newName => ({
  type: CHANGE_NAME,
  payload: newName,
});
