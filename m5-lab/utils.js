import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items. 
  // Each item has the following properties: "id", "title" and "price"

  // The reduce() method executes a user-supplied "reducer" callback function on each element of 
  // the array, in order, passing in the return value from the calculation on the preceding 
  // element. The final result of running the reducer across all elements of the array is a 
  // single value.
  // So run over each element, find the first element that belongs to the current category
  // and add the element. If there is no element left in the current category, select the
  // category of the first (remaining) element and add the category to the result.
  const result = data.reduce((accum, current) => {
    let categoryGroup = accum.find(elem => elem.title === current.category);
    if (!categoryGroup) {
      categoryGroup = { title: current.category, data: [] }
      accum.push(categoryGroup);
    }
    categoryGroup.data.push({ id: current.id, title: current.title, price: current.price })
    return accum;
  }, []);

  return result;
  
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
