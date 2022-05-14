import React from 'react';

function PickLocation(shouldFetchInitialLocation) {
    const [state, setState] = useState({
        cityOptions: [],
        districtOptions: [],
        wardOptions: [],
        selectedCity: null,
        selectedDistrict: null,
        selectedWard: null,
    });
 
    useEffect(() => {
        // First-load logic
    }, []);
 
    function onCitySelect(option) {
        // Logic khi chọn Tỉnh/Thành
    }
 
    function onDistrictSelect(option) {
        // Logic khi chọn Phường/Xã
    }
 
    function onWardSelect(option) {
        // Logic khi chọn Quận/Huyện
    }
 
    return {state, onCitySelect, onDistrictSelect, onWardSelect};
}
 
export default PickLocation;