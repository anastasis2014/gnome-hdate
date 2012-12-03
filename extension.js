
const St = imports.gi.St;
const Main = imports.ui.main;
const Hdate = imports.gi.LibHdateGlib.Hdate;

let date;

function init() {
    date = new St.Bin({ style_class: 'panel-date',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    var h = Hdate.new();
    var d = new Date();
    h.set_gdate(d.getDate()+1,d.getMonth()+1,d.getFullYear());
    let label = new St.Label({ text: h.get_format_date(0,0)});

    date.set_child(label);
    //date.connect('date-press-event', _showHello);
}

function enable() {
    Main.panel._centerBox.insert_child_at_index(date, 0);
}

function disable() {
    Main.panel._centerBox.remove_child(date);
}