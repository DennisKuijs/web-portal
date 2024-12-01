import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const SelectedInventory = () => {
    return (
        <Card className="w-[600px]">
            <CardHeader>
                <CardTitle>Je gekozen items</CardTitle>
                <CardDescription>Deze items wil je graag verkopen aan ons</CardDescription>
            </CardHeader>
            <CardContent>
                1
            </CardContent>
        </Card>
    )
}