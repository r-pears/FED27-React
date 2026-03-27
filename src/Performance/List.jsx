import {memo, useCallback, useMemo, useState} from "react";

const Item = memo(({item, onSelect}) =>{
    console.log(`Rendering ${item.name}`);
    return (
        <li onClick={() => onSelect(item.id)}>
            {item.name}
        </li>
    )
})

export function List(){
    const [selectedItem, setSelectedItem] = useState(null)

    const items = useMemo(() => {
        return Array.from({length: 1000}, (_, i) => ({
            id: i,
            name: `Item ${i + 1}`
        }))
    }, [])

    const handleItemSelect = useCallback((id) => {
        console.log('selected item id:', id);
        setSelectedItem(id)
    }, [])

    return (
        <ul>
            {items.map(item => (
                <Item key={item.id} item={item} onSelect={handleItemSelect} />
            ))
            }
        </ul>
    )
}