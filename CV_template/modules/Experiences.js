
const Experience = () => {
    return `
        <form>
            <fieldset>
                <h2>Employment History</h2>
                <div class="wrapper" id="work">
                    <div class="item">
                        <label for="work-1">Name and address of Organisation 1<span>*</span></label>
                        <input type="text" id="work-1">
                    </div>
                    <div class="item">
                        <label for="pos-1">Position Held<span>*</span></label>
                        <input type="text" id="pos-1">
                    </div>
                    <div class="item">
                        <label for="work-start-1">Start date<span>*</span></label>
                        <input type="date" id="work-start-1">
                    </div>
                    <div class="item">
                        <label for="work-end-1">End date<span>*</span></label>
                        <input type="date" id="work-end-1">
                    </div>
                </div>

                <div class="wrapper">
                    <div class="item">
                        <label for="work-2">Name and address of Organisation 2<span>*</span></label>
                        <input type="text" id="work-2">
                    </div>
                    <div class="item">
                        <label for="pos-2">Position Held<span>*</span></label>
                        <input type="text" id="pos-2">
                    </div>
                    <div class="item">
                        <label for="work-start-2">Start date<span>*</span></label>
                        <input type="date" id="work-start-2">
                    </div>
                    <div class="item">
                        <label for="work-end-2">End date</label>
                        <input type="date" id="work-end-2">
                    </div>
                </div>

                <div class="wrapper">
                    <div class="item">
                        <label for="work-3">Name and address of Organisation 3<span>*</span></label>
                        <input type="text" id="work-3">
                    </div>
                    <div class="item extra" >
                        <label for="pos-3">Position Held</label>
                        <input type="text" id="pos-3">
                    </div>
                    <div class="item">
                        <label for="work-start-3">Start date</label>
                        <input type="date" id="work-start-3">
                    </div>
                    <div class="item">
                        <label for="work-end-3">End date</label>
                        <input type="date" id="work-end-3">
                    </div>
                </div>
                <div class="edit">
                        <input type="button" value="Add+" name="addBtn" id="add-exp">
                </div>
                <div class="wrapper exp">
                    <div class="item">
                        <label for="work-4">Name and address of Organisation 4</label>
                        <input type="text" id="work-4">
                    </div>
                    <div class="item extra">
                        <label for="pos-4">Position Held</label>
                        <input type="text" id="pos-4">
                    </div>
                    <div class="item">
                        <label for="work-start-4">Start date</label>
                        <input type="date" id="work-start-4">
                    </div>
                    <div class="item">
                        <label for="work-end-4">End date</label>
                        <input type="date" id="work-end-4">
                    </div>
                </div>
            </fieldset>
        </form>
    `
}

export default Experience;