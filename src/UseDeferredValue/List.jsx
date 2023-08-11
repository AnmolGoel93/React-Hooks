import { useMemo, useDeferredValue } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);

  const updateListItems = useMemo(() => {
    const listItems = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      listItems.push(deferredInput);
    }

    return listItems;
  }, [deferredInput]);

  return updateListItems;
};

export default List;
