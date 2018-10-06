import authReducer from "../../reducers/auth";

test("should set login uid", () => {
  const action = {
    type: "LOGIN",
    uid: "idUser",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe("idUser");
});

test("should clear id for logout", () => {
  const action = {
    type: "LOGOUT",
  }
  const state = authReducer({ uid: "idUser" }, action);
  expect(state).toEqual({});
});