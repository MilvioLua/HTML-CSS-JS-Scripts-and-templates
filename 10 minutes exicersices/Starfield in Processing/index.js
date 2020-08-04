


<div class="row">
    <div class="col-md-4">
        <form asp-action="Create">
            <div asp-validation-summary="ModelOnly" class="text-danger"></div>
            <div class="form-group">
                <label asp-for="PaddockDataTypeId" class="control-label"></label>
                <select asp-for="PaddockDataTypeId" class="form-control" asp-items="ViewBag.PaddockDataTypeId"></select>
            </div>
            <div class="form-group">
                <label asp-for="Order" class="control-label"></label>
                <input asp-for="Order" class="form-control" />
                <span asp-validation-for="Order" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="LowRange" class="control-label"></label>
                <input asp-for="LowRange" class="form-control" />
                <span asp-validation-for="LowRange" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="HighRange" class="control-label"></label>
                <input asp-for="HighRange" class="form-control" />
                <span asp-validation-for="HighRange" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="Colour" class="control-label"></label>
                <input asp-for="Colour" class="form-control" />
                <span asp-validation-for="Colour" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="ColourblindColour" class="control-label"></label>
                <input asp-for="ColourblindColour" class="form-control" />
                <span asp-validation-for="ColourblindColour" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="IsOptimalRange" class="control-label"></label>
                <input asp-for="IsOptimalRange" class="form-control" />
                <span asp-validation-for="IsOptimalRange" class="text-danger"></span>
            </div>
            <div class="form-group">
                <input type="submit" value="Create" class="btn btn-primary" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action="Index">Back to List</a>
</div>













<!--Create data-modal-->
<div id="create-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0">
            <div class="modal-body p-0">
                <div class="card border-0 p-sm-3 p-2 justify-content-center">
                    <div class="card-header pb-0 bg-white border-0 ">
                        <div class="row">
                            <div class="col ml-auto"><button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>
                        </div>
                        <p class="font-weight-bold mb-2"> Create Paddock data type</p>
                    </div>
                    <div class="card-body px-sm-4 mb-2 pt-1 pb-0">
                        <div class="row  no-gutters">
                            <form asp-action="Create">
                                <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                                <div class="form-group">
                                    <label asp-for="Name" class="control-label"></label>
                                    <input asp-for="Name" class="form-control" />
                                    <span asp-validation-for="Name" class="text-danger"></span>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Create" class="btn btn-primary btn-sm" />
                                    <button type="button" class="btn btn-light text-muted btn-sm" data-dismiss="modal">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@section Scripts {
    @{await Html.RenderPartialAsync("_ValidationScriptsPartial");}
}
