// import React, { useEffect, useState } from "react";

// interface FilterSett {
//     item: string[],

// }

// type FilterCategory = "Bags" | "Watches" | "Sports" | "Sunglasses";
// const Filters: React.FC<FilterSett> = () => {
//     const [selectedFilters, setSelectedFilters] = useState([]);
//     const [filteredItems, setFilteredItems] = useState(item);

//     const filters: FilterCategory[] = ["Bags", "Watches", "Sports", "Sunglasses"];

//     const handleFilterButtonClick = (selectedCategory) => {
//         if (selectedFilters.includes(selectedCategory)) {
//             const filters = selectedFilters.filter((el) => el !== selectedCategory);
//             setSelectedFilters(filters);
//         }
//         else {
//             setSelectedFilters([...selectedFilters, selectedCategory]);
//         }
//     };

//     useEffect(() => {
//         filterItems();
//     }, [selectedFilters]);

//     const filterItems = () => {
//         if (selectedFilters.length > 0) {
//             const showItems = selectedFilters.map((selectedCategory) => {
//                 const temp = showItems.filter((item) => item.category === selectedCategory);
//                 return temp;
//             });
//             setFilteredItems(showItems.flat());
//         }
//         else {
//             setFilteredItems([...items]);
//         }
//     }
// }

// export default Filters;