import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserFormData } from '../../types/user.types';

interface FormState {
  currentTab: number;
  visitedTabs: number[];
  formData: UserFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  fileUploads: Record<string, boolean>;
}

const initialState: FormState = {
  currentTab: 0,
  visitedTabs: [0],
  formData: {},
  errors: {},
  isSubmitting: false,
  fileUploads: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload;
    },
    markTabVisited: (state, action: PayloadAction<number>) => {
      if (!state.visitedTabs.includes(action.payload)) {
        state.visitedTabs.push(action.payload);
      }
    },
    resetVisitedTabs: (state) => {
      state.visitedTabs = [0];
    },
    updateFormData: (
      state,
      action: PayloadAction<{ field: string; value: any }>,
    ) => {
      const { field, value } = action.payload;
      state.formData[field] = value;

      // Clear error when field is updated
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = { ...state.errors, ...action.payload };
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setFileUploadStatus: (
      state,
      action: PayloadAction<{ field: string; status: boolean }>,
    ) => {
      const { field, status } = action.payload;
      state.fileUploads[field] = status;
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    resetForm: (state) => {
      state.formData = {};
      state.errors = {};
      state.currentTab = 0;
      state.fileUploads = {};
    },
  },
});

export const selectForm = (state: { user: FormState }) => state.user;

export const {
  setCurrentTab,
  markTabVisited,
  resetVisitedTabs,
  updateFormData,
  setErrors,
  clearErrors,
  setFileUploadStatus,
  setSubmitting,
  resetForm,
} = userSlice.actions;

export default userSlice.reducer;
