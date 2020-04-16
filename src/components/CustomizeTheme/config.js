import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import pink from '@material-ui/core/colors/pink';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';

export const customizes = [
  {
    title: 'Theme Color',
    name: 'color',
    datas: [
      { label: 'Blue', value: blue },
      { label: 'Pink', value: pink },
      { label: 'Orange', value: orange },
      { label: 'Green', value: green },
      { label: 'Yellow', value: yellow },
    ],
  },
  {
    title: 'Theme Type',
    name: 'type',
    datas: [
      { label: 'Dart Theme', value: 'dark' },
      { label: 'light Theme', value: 'light' },
    ],
  },
  {
    title: 'Theme Spacing',
    name: 'size',
    datas: [
      { label: '8', value: 8 },
      { label: '16', value: 16 },
      { label: '24', value: 24 },
      { label: '32', value: 32 },
      { label: '40', value: 40 },
      { label: '48', value: 48 },
      { label: '56', value: 56 },
    ],
  },
];
