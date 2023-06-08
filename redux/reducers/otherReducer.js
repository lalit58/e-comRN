import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({ loading: false }, (builder) => {
  builder
    .addCase("updatePasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProfileRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePasswordSucess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProfileSucess", (state) => {
      state.loading = true;
    })
    .addCase("updatePasswordFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProfileFailed", (state) => {
      state.loading = true;
    });
  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
