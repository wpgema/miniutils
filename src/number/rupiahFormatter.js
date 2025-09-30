export default function formatRupiah(value) {
    if (typeof value !== "number") {
        throw new TypeError("Value must be a number");
    }

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    }).format(value);
}
