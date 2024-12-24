"use client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function ThemePopover() {
    const { theme, setTheme } = useTheme()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Choose theme</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Themes</h4>
                        <p className="text-sm text-muted-foreground">
                            Set the best theme for you to enjoy
                        </p>
                    </div>

                    {theme === "light" ? (
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Button
                                className="w-full"
                                onClick={() => setTheme("dark")}
                            >
                                Dark
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Button
                                className="w-full"
                                onClick={() => setTheme("light")}
                            >
                                Light
                            </Button>
                        </div>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    )
}
