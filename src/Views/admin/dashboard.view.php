<div class="SnContent">
    <div class="SnGrid m-grid-3 l-grid-3 col-gap">
        <div class="SnCard DashCard blue">
            <div class="SnCard-body DashCard-body">
                <div class="DashCard-icon"><i class="far fa-user"></i></div>
                <div class="DashCard-right">
                    <div class="DashCard-title">Usuarios</div>
                    <div class="DashCard-number"><?= $parameter['userCount'] ?></div>
                </div>
            </div>
        </div>
        <div class="SnCard DashCard green">
            <div class="SnCard-body DashCard-body">
                <div class="DashCard-icon"><i class="far fa-address-book"></i></div>
                <div class="DashCard-right">
                    <div class="DashCard-title">Data 2</div>
                    <div class="DashCard-number">0.00</div>
                </div>
            </div>
        </div>
        <div class="SnCard DashCard purple">
            <div class="SnCard-body DashCard-body">
                <div class="DashCard-icon"><i class="fas fa-charging-station"></i></div>
                <div class="DashCard-right">
                    <div class="DashCard-title">Data 1</div>
                    <div class="DashCard-number">0.00</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="<?= URL_PATH ?>/assets/script/helpers/moment.js"></script>
<script src="<?= URL_PATH ?>/assets/script/helpers/chart.min.js"></script>
<script src="<?= URL_PATH ?>/assets/script/dashboard.js"></script>