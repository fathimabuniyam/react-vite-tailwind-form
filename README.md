# Form - React + TypeScript + Vite + TailwindCSS

Add User flow built using React, TypeScript, TailwindCSS, and Vite.

## Features

- ✅ Reusable form components
  - Input
  - Select
  - Checkbox
  - File Upload
- ✅ JSON config used for form building
- ✅ Full TypeScript type-safety
- ✅ Tailwind utility-based UI
- ✅ Form Data stored in Redux
- ✅ Clean folder structure and separation of concerns

---

- ✅ Next button disabled until all mandatory fields complete
- ✅ Previous button always enabled
- ✅ Summary tab shows all form data in design layout
- ✅ Form submission only from Summary tab
- ✅ Use JSON for form building
- ✅ Form Data stored in Redux

---

- ✅ Form validation done on each tab submission
- ✅ Loading states for file uploads
- ✅ Mobile-responsive

## Documentation

### Reusable Form Components

- FormInput – text inputs and textarea
- FormSelect – dropdown select
- FormCheckbox – boolean selection
- FormFileUpload – single and multiple file upload
- FormLayout – shared wrapper that shows label, error, required badge

### Step Indicator

- Used to show the progress of form tabs
- Once forms are valid and tab is visited - it gets marked
- Can go back to previous steps by clicking on tab also

### Button

- Four color variants : Primary (blue) , secondary (outlined blue), error (outlined red), disabled (grey)
- Default button element

## Folder Structure

- src
  - components _(common components)_
  - constants
  - pages _(main modules)_
  - store _(redux files)_
  - types _(type files)_
  - util _(utility files)_

## Running

Install dependencies:

```bash
  yarn
```

Start development:

```bash
  yarn dev
```

## Screenshots

![Application Information Tab](https://github.com/fathimabuniyam/react-vite-tailwind-form/blob/main/src/assets/screenshots/1.png)

![Purpose and Documents Tab](https://github.com/fathimabuniyam/react-vite-tailwind-form/blob/main/src/assets/screenshots/2.png)

![Purpose and Documents Filled](https://github.com/fathimabuniyam/react-vite-tailwind-form/blob/main/src/assets/screenshots/3.png)

![Additional Information Tab Filled](https://github.com/fathimabuniyam/react-vite-tailwind-form/blob/main/src/assets/screenshots/4.png)

![Summary Tab View 1](https://github.com/fathimabuniyam/react-vite-tailwind-form/blob/main/src/assets/screenshots/5.png)

![Summary Tab View 2](https://github.com/fathimabuniyam/react-vite-tailwind-form/blob/main/src/assets/screenshots/6.png)
