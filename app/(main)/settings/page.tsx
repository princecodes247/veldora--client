"use client";
import { ProfileForm } from "@/components/settings/ProfileForm";
import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          The details of your veldora account
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
